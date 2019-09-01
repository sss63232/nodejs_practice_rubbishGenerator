const getRandomBetween = (start, end) => {
  const gap = end - start
  return start + Math.floor(Math.random() * gap)
}

const TASK = {
  engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
  designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
  entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']

}

const PHRASE = ['很簡單', '很容易', '很快', '很正常']

const getRubbishByTarget = target => {
  const tasksByTarget = TASK[target]
  const task = tasksByTarget[getRandomBetween(0, tasksByTarget.length)]
  const phrase = PHRASE[getRandomBetween(0, PHRASE.length)]

  return `身為一個${target},${task},${phrase}吧！`
}

module.exports = getRubbishByTarget
