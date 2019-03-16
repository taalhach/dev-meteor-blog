
Template.editPost.helpers({
    getPost:()=>{
        console.log("eathy rakh: ",Posts.findOne({slug:FlowRouter.current().params.slug}))
        return Posts.findOne({slug:FlowRouter.current().params.slug})
    }
})