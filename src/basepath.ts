const dev = process.env.NODE_ENV === 'development';
const BASE_PATH = dev ? '/' : '/svelte-kit/' 
export default BASE_PATH;