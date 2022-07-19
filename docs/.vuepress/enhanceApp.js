export default ({router}) => {
  console.log("🚀 ~ file: enhanceApp.js ~ line 2 ~ router", router)
  router.beforeEach((to,from)=>{
    console.log(to,from)
  })
}