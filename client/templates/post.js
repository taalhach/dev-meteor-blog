
Template.post.helpers({
    post:()=>{
        return Posts.findOne({slug:FlowRouter.current().params.slug})
    }
})