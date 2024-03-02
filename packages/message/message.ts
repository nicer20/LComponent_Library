import types from './types'
const lMessage = (options) => {
}
Object.values(types).forEach(type=>{
    lMessage[type] = (options)=>{
        options.type=type
        return lMessage(options)
    }
})
export {
    types
}
export default lMessage
