const htmlCode = document.querySelector('#html-code')
const cssCode = document.querySelector('#css-code')
const jsCode = document.querySelector('#js-code')
const output = document.querySelector('#output')
const clearBtn = document.querySelector('#clear-btn')
const runBtn = document.querySelector('#run')

function runCode(){
    localStorage.setItem('html_code', htmlCode.value)
    localStorage.setItem('css_code', cssCode.value)
    localStorage.setItem('js_code', jsCode.value)

    output.contentDocument.body.innerHTML = htmlCode.value + `<style>${cssCode.value}</style>`
    output.contentWindow.eval(jsCode.value)
}

htmlCode.onkeyup = () => runCode()
cssCode.onkeyup = () => runCode()
jsCode.onkeyup = () => runCode()

clearBtn.addEventListener('click', ()=>{
    // output.document.close()
    output.contentDocument.body.innerHTML = ""
})

htmlCode.value = localStorage.html_code
cssCode.value = localStorage.css_code
jsCode.value = localStorage.js_code