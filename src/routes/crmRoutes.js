import {
    addNewContact,
    getContacts,
    getContactWithId,
    updateContact,
    deleteContact,
} from "../controllers/crmController";

const routes = (app) => {
    app.route("/contact")
        // get all contact
        .get((req, res, next) => {
            console.log(`Request from: ${req.originalUrl}`);
            console.log(`Request type: ${req.method}`);
            next();
        }, getContacts)
        // add a new contact
        .post(addNewContact);

    app.route("/contact/:contactId")
        //update a contact
        .put(updateContact)
        //get specific contact
        .get(getContactWithId)
        .delete(deleteContact);
};
export default routes;
