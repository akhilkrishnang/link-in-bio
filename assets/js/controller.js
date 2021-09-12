/**
 * View JS Controller
 * used mainly for dynamic data rendering
 */
var app = new Vue({
    el: '#linkinbio-app',
    data() {
        return {
            links: [ { "display_name": "Website", "url": "https://www.akhilkrishnang.com/", "trending": true } ] // Default value
          }
    },
    mounted () {
      axios
        .get('https://cms.akhilkrishnang.com/public/darkroom/items/link_in_bio?fields=display_name,order,url,trending,featured_image.private_hash&sort=order&filter[status][eq]=published')
        .then(response => {
            if(response.data){
                this.links = response.data.data
            }          
        })
    }
})