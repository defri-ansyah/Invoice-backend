const express = require('express');
const models = require('../models');
const moment = require('moment');

const createInvoice = async (req, res) => {
  const { items, customer_id } = req.body;
  let sub_total = 0;
  for (const [i, item] of items.entries()) {
    const itemsModel = await models.items.findOne({
      where: {
        id: item.item_id
      }
    })
    items[i].amount = itemsModel.dataValues.price * item.qty
    sub_total += items[i].amount
  }
  const tax_fee = sub_total * 0.1
  const total_amount = sub_total + tax_fee
  const invoice_code = 'IV' + moment().format('x')
  models.invoices.create({
    invoice_code,
    customer_id,
    tax_fee,
    sub_total,
    total_amount,
  })
    .then((invoices) => {
      items.map(item => {
        models.invoice_details.create({
          item_id: item.item_id,
          invoice_id: invoices.dataValues.id,
          qty: item.qty,
          amount: item.amount
        })
      })
      if (invoices) {
        res.status(200).json({
          'status': 'OK',
          'messages': 'invoices berhasil dibuat',
          'data': {
            invoice_id: invoices.dataValues.id
          }
        })
      } else {
        res.status(400).json({
          'status': '400',
          'messages': 'invoices gagal dibuat',
          'data': {}
        })
      }
    })
    .catch((err) => {
      res.status(500).json({
        'status': 'ERROR',
        'messages': err.message,
        'data': null,
      })
    })
}

const getAllInvoice = async (req, res) => {
  models.invoices.findAll({
    include: [{
      model: models.users,
      attributes: ['username']
    }]
  })
    .then(async (invoices) => {
      if (invoices) {
        res.status(200).json({
          'status': 'OK',
          'messages': 'invoices berhasil dibuat',
          'data': invoices
        })
      } else {
        res.status(400).json({
          'status': '400',
          'messages': 'invoices gagal dibuat',
          'data': {}
        })
      }
    })
    .catch((err) => {
      res.status(500).json({
        'status': 'ERROR',
        'messages': err.message,
        'data': null,
      })
    })
}

const getInvoice = async (req, res) => {
  const { id } = req.params
  models.invoices.findOne({
    include: [{
      model: models.invoice_details,
      include: [{
        model: models.items,
        attributes: ['name', 'price']
      }]
    }, {
      model: models.users,
      attributes: ['username', 'address', 'phone_number']
    }],
    where: {
      id
    }
  })
    .then(async (invoices) => {
      if (invoices) {
        res.status(200).json({
          'status': 'OK',
          'messages': 'invoices berhasil dibuat',
          'data': invoices
        })
      } else {
        res.status(400).json({
          'status': '400',
          'messages': 'invoices gagal dibuat',
          'data': {}
        })
      }
    })
    .catch((err) => {
      res.status(500).json({
        'status': 'ERROR',
        'messages': err.message,
        'data': null,
      })
    })
}

const updateInvoice = async (req, res) => {
  const { invoice_id, items, customer_id } = req.body;
  console.log(invoice_id);
  let sub_total = 0;
  for (const [i, item] of items.entries()) {
    const itemsModel = await models.items.findOne({
      where: {
        id: item.item_id
      }
    })
    items[i].amount = itemsModel.dataValues.price * item.qty
    sub_total += items[i].amount
  }
  const tax_fee = sub_total * 0.1
  const total_amount = sub_total + tax_fee
  const invoice_code = 'IV' + moment().format('x')
  models.invoices.update({
    invoice_code,
    customer_id,
    tax_fee,
    sub_total,
    total_amount,
  }, {
    where: {
      id: invoice_id
    }
  })
    .then((invoices) => {
      models.invoice_details.destroy({
        where: {
          invoice_id
        }
      })
      items.map(item => {
        models.invoice_details.create({
          item_id: item.item_id,
          invoice_id: invoice_id,
          qty: item.qty,
          amount: item.amount
        })
      })
      if (invoices) {
        res.status(200).json({
          'status': 'OK',
          'messages': 'invoices berhasil edit',
          'data': {
            invoice_id
          }
        })
      } else {
        res.status(400).json({
          'status': '400',
          'messages': 'invoices gagal edit',
          'data': {}
        })
      }
    })
    .catch((err) => {
      res.status(500).json({
        'status': 'ERROR',
        'messages': err.message,
        'data': null,
      })
    })
}

const getReportInvoice = async (req, res) => {
  models.users.findAll({
    where: {
      role: 'customer'
    }
  })
    .then(async(customers) => {
      // console.log(customers);
  for (const [i, customer] of customers.entries()) {
        await models.invoices.findOne({
          where: {
            customer_id:customer.dataValues.id
          },
          order: [
            ['createdAt', 'DESC']
          ]
        })
        .then((invoices) => {
          customers[i].dataValues.last_invoice_id = invoices.dataValues.id
          customers[i].dataValues.last_invoice_date = invoices.dataValues.createdAt
          customers[i].dataValues.last_invoice_total_amount = invoices.dataValues.total_amount
        })
        console.log(customers);
      }
      if (customers) {
        res.status(200).json({
          'status': 'OK',
          'messages': 'berhasil mendapatkan data',
          'data': customers
        })
      } else {
        res.status(400).json({
          'status': '400',
          'messages': 'gagal mendapatkan data',
          'data': {}
        })
      }
    })
    .catch((err) => {
      res.status(500).json({
        'status': 'ERROR',
        'messages': err.message,
        'data': null,
      })
    })
}

const deleteInvoice = async (req, res) => {
  const { id } = req.params
  models.invoice_details.destroy({
    where: {
      invoice_id: id
    }
  })
  models.invoices.destroy({
    where: {
      id
    }
  })
    .then(async (invoices) => {
      if (invoices) {
        res.status(200).json({
          'status': 'OK',
          'messages': 'invoices berhasil delete',
          'data': invoices
        })
      } else {
        res.status(400).json({
          'status': '400',
          'messages': 'invoices gagal delete',
          'data': {}
        })
      }
    })
    .catch((err) => {
      res.status(500).json({
        'status': 'ERROR',
        'messages': err.message,
        'data': null,
      })
    })
}
module.exports = { createInvoice, getAllInvoice, getInvoice, updateInvoice, getReportInvoice, deleteInvoice }
