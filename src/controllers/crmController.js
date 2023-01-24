import mongoose from "mongoose";
import { ContactSchema } from "../models/crmModels";

const Contant = mongoose.model("Contact", ContactSchema);

export const addNewContact = (req, res) => {
    let newContact = new Contant(req.body);

    newContact.save((err, contact) => {
        if (err) {
            res.send(err);
        }
        res.json(contact);
    });
};

export const getContacts = (req, res) => {
    Contant.find({}, (err, contact) => {
        if (err) {
            res.send(err);
        }
        res.json(contact);
    });
};

export const getContactWithId = (req, res) => {
    Contant.findById(req.params.contactId, (err, contact) => {
        if (err) {
            res.send(err);
        }
        res.json(contact);
    });
};

export const updateContact = (req, res) => {
    Contant.findOneAndUpdate(
        { _id: req.params.contactId },
        req.body,
        { new: true },
        (err, contact) => {
            if (err) {
                res.send(err);
            }
            res.json(contact);
        }
    );
};

export const deleteContact = (req, res) => {
    Contant.remove({ _id: req.params.contactId }, (err, contact) => {
        if (err) {
            res.send(err);
        }
        res.json({ message: "Successfully deleted contact" });
    });
};
