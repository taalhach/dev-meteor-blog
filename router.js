// // BlazeLayout.setRoot('body');
if (Meteor.isClient){
Session.setDefault('lazyloadLimit',2)

}
FlowRouter.notFound={
    action:()=>{
        BlazeLayout.render('layout',{
            header:'header',
            body:'notFound'
        })
    }
}
FlowRouter.route('/about',{
    action:(params,queryParams)=>{
        // console.log("about called")
        BlazeLayout.render('layout',{
            header:'header',
            body:'about'
        })
    }
})

FlowRouter.route('/post/:slug',{
    subscriptions: function(params, queryParams){

    this.register('single-post',Meteor.subscribe('single-post',params.slug))
    },
    action:(params,queryParams)=>{
        BlazeLayout.render('layout',{
            header:'header',
            body:'post'
        })
    }

})

FlowRouter.route('/',{
    subscriptions:function(params,queryParams){
        this.register('myposts',Meteor.subscribe('all-posts'))
    },
    action:(params,queryParams)=>{
        BlazeLayout.render('layout',{
            header:'header',
            body:'home'
        })
    }
})

