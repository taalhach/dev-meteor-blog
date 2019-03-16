Template.home.created=()=>{
    console.log("Home created!!!")
}
Template.home.rendered=()=>{
    console.log("Home Rendered!!!")
    // console.log(this.findAll('p'))
}
Template.home.destroyed=()=>{
    console.log("Home destroyed!!!")
}
Template.home.helpers({
    exampleHelper: ()=>{
        return new Spacebars.SafeString('This text is returned from helper function with some <strong>HTML</strong>.'
        )},
    dataContextHelper:()=>{
        return{
            someText:"this text is set using parent template helper",
            somNested:{
                text:"Data from nested obj"
            }
        }
    },
    postList:()=>{
        return Posts.find({},{sort:{timeCreated:-1}})
    },
    calculateSquare:(n,m)=>{
        return n*n-m
    } 
    

})
Template.home.events({
    'click button.lazyload':(e,template)=>{
        var currentLimit=Session.get('lazyloadLimit')
        Session.set('lazyloadLimit',currentLimit+2)
    },
})