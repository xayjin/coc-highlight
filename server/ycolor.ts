import * as fs from 'fs';
import path from 'path'
function getcolor(): JSON | null {

	  let file = path.resolve(__dirname, 'ycolor.json')
	if (fs.existsSync(file)) //判断是否存在此文件
	{
		//读取文件内容，并转化为Json对象
		let userBugsJson = JSON.parse(fs.readFileSync(file, "utf8"));
		//获取Json里key为data的数据
		return userBugsJson;
	}
	return null;
}

const YCOLOR = getcolor();
export default YCOLOR;
//  :set runtimepath^=~/works/coc-highlight/lib/
