
import {reactive, computed} from 'vue'

export default (svgWidth, svgHeight) => {
    let square = reactive({
        x: 10,
        y: 10,
        width: 150,
        height: 100,
        maxX: computed(() => {
            return svgWidth.value - square.width
        }),
        maxY: computed(() => {
            return svgHeight.value - square.height
        }),
        maxWidth: computed(() => {
            return svgWidth.value - square.x
        }),
        maxHeight: computed(() => {
            return svgHeight.value - square.y
        }),
    })


    square.move = (direction) => {
        if(direction.up && square.y > 0) {
            square.y -= 1
        }
        if(direction.down && square.y < svgHeight.value) {
            square.y += 1
        }
        if(direction.left && square.x > 0) {
            square.x -= 1
        }
        if(direction.right && square.x < svgWidth.value) {
            square.x += 1
        }
    }


    return square
    //return { square, move }


} 