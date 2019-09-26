import Tag from './tag';

const version = '1.0.0';

const components = [
  Tag
]

const install = Vue =>{
  components.forEach((Component)=>{
    Vue.use(Component)
  })
} 

/* istanbul ignore if */
if(typeof window !== 'undefined' && window.Vue){
  install(window.Vue);
}

export {
  Tag
}

export default {
  version,
  install
}