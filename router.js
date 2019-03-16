// // BlazeLayout.setRoot('body');
// if (Meteor.isClient){
// Session.setDefault('lazyloadLimit',2)

// }

function checkEditPostPermission(){
    if (!Meteor.user() ||
    !Meteor.user().roles ||
    !Meteor.user().roles.admin){
        return false
    }
    return true
}
FlowRouter.route('/create-post',{
    action:(params,queryParams)=>{
        if (checkEditPostPermission()){
            BlazeLayout.render('layout',{
                header:"header",
                body:'editPost'
            })
        }else{
            BlazeLayout.render('layout',{
                header:'header',
                body:'notFound'
            })
        }
    }
})
FlowRouter.route('/edit-post/:slug',{
    subscriptions: function(params, queryParams){

        this.register('single-post',Meteor.subscribe('single-post',params.slug))
        },
    action:(params,queryParams)=>{
        if (checkEditPostPermission()){
            BlazeLayout.render('layout',{
                header:"header",
                body:'editPost'
            })
        }else{
            BlazeLayout.render('layout',{
                header:'header',
                body:'notFound'
            })
        }
    }
})
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

