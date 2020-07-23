import { get } from "./util"
export function resetInput() {

const buttonSubmit = get('#submit1')
 
    buttonSubmit.addEventListener('click', function(event) {
        event.preventDefault()
        input1.value = ''
        input2.value = ''
        input3.value = ''
    })
  }
