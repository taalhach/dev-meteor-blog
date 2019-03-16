if(Meteor.isClient){
    // console.log("isclient")
    Meteor.subscribe("userRoles")
}
Accounts.config({
    forbidClientAccountCreation: true
    });