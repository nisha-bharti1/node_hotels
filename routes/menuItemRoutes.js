const express = require('express');
const router =  express.Router();
const MenuItem = require('./../models/MenuItem');

// Post method to add a Menu Item

router.post('/', async (req, res) => {
  try {
    const data = req.body
    const newMenu = new MenuItem(data);

    const response = await newMenu.save()
    console.log('data saved');
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internal server Error' })
  }
})

router.get('/', async (req, res) => {
  try {
    const data = await MenuItem.find();
    console.log('data fetched');
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internal server Error' })
  }
})

router.get('/:tasteType', async(req, res)=>{
    try {
      const tasteType = req.params.tasteType;
      if (tasteType == 'sweet' || tasteType == 'spicy' || tasteType == 'sour') {
          const response = await MenuItem.find({taste:tasteType});
          console.log('response fetched');
          res.status(200).json(response);
      }else{
        res.status(404).json({error: 'Invalid Taste type type'});
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Internal server Error' })
    }
  })

  router.put('/:id', async (req, res)=>{
    try{
        const menuItemId= req.params.id; // extract the id from the Url parameter
        const updatemenuData = req.body;  // updated data for the person

        const response = await MenuItem.findByIdAndUpdate(menuItemId,updatemenuData,{
          new: true, // return the updated document
          runvalidators:true,  //Run mongoose validation
        })

        if(!response){
          return res.status(404).json({ error:'Menu Item not found' });
        }
        console.log('data updated');
        res.status(200).json(response);

    }catch(err){
      console.log(err);
      res.status(500).json({ error: 'Internal server Error' })
    }
  })


  router.delete('/:id', async (req,res)=>{
    try{
      const menuItenId= req.params.id; //Extract the person's Id from the URL parameter

      //Asuming you have a person model
      const response = await MenuItem.findByIdAndDelete(menuItenId);
      if(!response){
        return res.status(404).json({ error:'MenuItem not found' });
      }
      console.log('data deleted');
      res.status(200).json({message: 'MenuItem deleted successfully'});

    }catch(err){
      console.log(err);
      res.status(500).json({ error: 'Internal server Error' })
    }
  })

module.exports = router;