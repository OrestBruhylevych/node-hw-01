const contacts = require("./contacts");



async function invokeAction ({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
        const contactsList = await contacts.listContacts();
        console.log(contactsList);
        break;

    case "get":
          const contact = await contacts.getContactById(id);
          console.log(contact);
          break;

    case "add":
          const newContact = await contacts.addContact( name, email, phone );
          console.log(newContact);
          break;

    case "remove":
          const deleteContacts = await contacts.removeContact(id);
          console.log(deleteContacts);
          break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

// invokeAction({ action: "list" });
// invokeAction({ action: "get", id: "10" });
// invokeAction({ action: "add",  name: "Orest", email: "br@rr.r", phone: "322332323232" });
// invokeAction({ action: "remove", id: "_2KVv87XuegSCE1Zxctf4" }); 