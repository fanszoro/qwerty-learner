import { Link } from '@arco-design/web-react'

const BubbleConfirmTemplate = () => {
  const downloadFileFn = () => {
    const jsonObject = {
      bookName: 'Dr.Seuss | 该字段为单词本名字',
      description: 'Dr.Seuss苏斯博士系列 | 该字段为单词本描述',
      name: 'Luke Luck likes lakes. | 该字段为英文单词/短语',
      trans: '幸运的勒克喜欢湖 | 该字段为中文释义',
      ukphone: '英音音标 | 该字段为英文单词音标（有则填写，无则留空）',
      usphone: '美音音标 | 该字段为英文单词音标（有测填写，无则留空）',
    }
    // 将JSON对象转换为字符串
    const jsonString = JSON.stringify([jsonObject], null, 2)
    // 创建一个blob对象
    const blob = new Blob([jsonString], { type: 'application/json' })
    // 创建一个下载链接
    const a = document.createElement('a')
    a.href = URL.createObjectURL(blob)
    a.download = '单词导入模版.json'
    // 触发下载
    document.body.appendChild(a) // 需要将a元素添加到文档中
    a.click()
    // 清理，移除创建的元素
    document.body.removeChild(a)
  }

  return (
    <div>
      <div>
        已经准备好JSON格式的文件了吗?<Link onClick={downloadFileFn}>点击此处</Link>下载模版文件
      </div>
    </div>
  )
}

export default BubbleConfirmTemplate