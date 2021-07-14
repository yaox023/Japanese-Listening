
/**
 * 考前对策 N4 N5
 * https://mp.zhizhuma.com/book.htm?id=28898
 * https://mp.zhizhuma.com/book.htm?id=28906
 */


(async () => {

  // const week = "第六周"

  const sleep = async (ms) => new Promise((resolve) => setTimeout(resolve, ms))
  
  document.querySelector('.login-modal').style.display = 'none'
  
  const result = []
  
  const eles = document.querySelector('.a-audio-content > .audio-items')
    .children
  for (const ele of eles) {
    // const title = week + "-" + ele.querySelector('.audio-title').innerText
    const title = ele.querySelector('.audio-title').innerText
    const duration = ele.querySelector('.audio-duration > span').innerText
    const size = ele.querySelector('.audio-size > span').innerText
    ele.click()
    await sleep(1000)
    const url = document.getElementsByTagName('audio')[0].src
    result.push({ title, duration, size, url })
  }
  
  if ([...new Set(result.map(r => r.url))].length !== result.length) {
    console.error("重复的 url")
  }
  
  console.log(JSON.stringify(result, null, 2))
  
})()


/**
 * 考前对策 N3 N2 N1
 * https://mp.zhizhuma.com/book.htm?id=22344
 * https://mp.zhizhuma.com/book.htm?id=18896
 * https://mp.zhizhuma.com/book.htm?id=22343
 * 
 * 语法必备 N3 N2 N1
 * https://mp.zhizhuma.com/book.htm?id=41828
 * https://mp.zhizhuma.com/book.htm?id=32337
 * https://mp.zhizhuma.com/book.htm?id=42077
 */

(async () => {

  const sleep = async (ms) => new Promise((resolve) => setTimeout(resolve, ms))
  
  document.querySelector('.login-modal').style.display = 'none'
  
  const result = []

  const eles = document.querySelector('.a-audio-content > .audio-items')
    .children
  for (const ele of eles) {
    const title = ele.querySelector('.audio-title').innerText
    const duration = ele.querySelector('.audio-duration > span').innerText
    const size = ele.querySelector('.audio-size > span').innerText
    ele.click()
    await sleep(1000)
    const url = document.getElementsByTagName('audio')[0].src
    result.push({ title, duration, size, url })
  }
  
  const filteredLength = [...new Set(result.map(r => r.url))].length
  if (filteredLength !== result.length) {
    console.error("重复的 url")
  } else {
    console.log(JSON.stringify(result, null, 2))
  }
})()
