const fs = require('fs')
const path = require('path')

var filePath = path.resolve()

fs.readdir(filePath+'/public/', (err, files) => {
	var name = [files.slice(0,1)[0], files.slice(3,4)[0],files.slice(4)[0]]
  console.log(files)
  name.forEach((item , index) => {
		var url = path.join(filePath+'/public/',name[index]),
			  dest = path.join(filePath+'/build/', name[index])
		fs.stat(url, (err, stats) => {
			if (err) throw err;
			//是文件
			if(stats.isFile()) {
				//创建读取流
				readable = fs.createReadStream(url)
				//创建写入流
				writable = fs.createWriteStream(dest, {encoding: "utf8"})
				// 通过管道来传输流
				readable.pipe(writable)
			}
		})
	})

})
