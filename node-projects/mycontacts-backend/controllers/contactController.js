//Create @desc for Get All Contacts
//@route Get /api/contacts
// get access to the api @access public

const getContacts = (req, res) => {
    res.status(200).json({"message": "Get all contacts"})
}

//Create @desc for Create new Contacts
//@route Post /api/contacts
// get access to the api @access public

const createContact = (req, res) => {
    console.log("The request is ", req.body)

    const {name, age, email} = req.body

    if(!name || !age || !email){
        res.status(400)
        throw new Error("All fields are mandatory")

        //if in the request some fields are not filled up we will throw or send an error message
    }
    res.status(201).json({"message": "New Contact Created contacts"})
}

//Create @desc for Get all Contacts
//@route Post /api/contacts/:id
// get access to the api @access public

const getContact = (req, res) => {
    res.status(201).json({"message": `Get contact for ${req.params.id}`})
}

//Create @desc for Update Contacts
//@route Update /api/contacts/:id
// get access to the api @access public

const updateContact = (req, res) => {
    res.status(201).json({"message": `Update contact ${req.params.id}`})
}

//Create @desc for Delete Contacts
//@route Delete /api/contacts/:id
// get access to the api @access public

const deleteContact = (req, res) => {
    res.status(201).json({"message": `Delete contact ${req.params.id}`})
}

module.exports = {getContact, createContact, updateContact, deleteContact, getContacts}

