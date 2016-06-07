Router.configure({
  layoutTemplate: 'layout'
})

Router.map(function(){
  // Posts Router
  this.route('posts',{
    path: '/',
    template: 'posts'
  });
  // about Router
  // this.route('about',{
  //   path: '/about',
  //   template: 'about'
  // });
  this.route('about');
  this.route('profile');
});
