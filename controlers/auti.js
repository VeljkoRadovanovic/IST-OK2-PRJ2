const express = require('express')
const router = express.Router();

const Auti = require('../models/autimodel')

router.get('/',(req,res)=>{
    Auti
    .find()
    .lean() 
    .then(data =>{
        res.render("auti/index",{auti: data})
    }).catch(err => console.log(err))
})

router.get('/add', (req, res) => {
    res.render('auti/add')
  })

  router.get('/add/:id', (req, res) => {
    Auti.findById(req.params.id).lean()
      .then(data => res.render('auti/add', { auti: data }))
      .catch(err =>
        console.log(err))
  })


  router.post('/add', (req, res) => {
    const a = {
        marka: req.body.marka,
        model: req.body.model,
        godina: req.body.godina,
    }
    const { _id } = req.body
    if (_id == '')
      new Auti({...a}).save()
        .then(data => res.redirect('/auti'))
        .catch(err =>  console.log(err))
    else
      Auti.findByIdAndUpdate(_id, a)
        .then(data => res.redirect('/auti'))
        .catch(err =>  console.log(err))
  })

  router.post('/delete/:id', (req, res) => {
    Auti.findByIdAndDelete(req.params.id)
      .then(data => res.redirect('/auti'))
      .catch(err => console.log(err))
  })






module.exports = router