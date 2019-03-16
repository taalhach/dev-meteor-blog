Template.post.helpers({
    data:()=>{
    c=    Posts.findOne({slug:FlowRouter.current().params.slug})
   console.log(c) 
        return c
    }
})