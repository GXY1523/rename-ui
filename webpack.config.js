const path=require('path');
const { VueLoaderPlugin} =require('vue-loader')

const glob =require('glob');
const list={}

// 一个个引入文件过于麻烦，因此采用下面的方式
// {
//     card:'./packages/Card/index.js'
//     demo:'./packages/Demo/index.js'
// }
async function makeList(dirPath,list){
    const files=glob.sync(`${dirPath}/**/index.js`)
    console.log('files:',files);
    for(let file of files){
        const component=file.split(/[/.]/)[2]
        console.log('component:',component);
        list[component]=`./${file}`
    }
    console.log(list);
}

makeList('packages',list)

module.exports={
    entry:list,
    mode:'development',
    output:{
        filename:'[name].umd.js',
        path:path.resolve(__dirname,'dist'),
        
        library:'mui',
        libraryTarget:'umd'
    },
    plugins:[
        new VueLoaderPlugin(),
    ],
    module:{
        rules:[
            {
                test:/\.vue$/,
                use:[
                    {
                        loader:'vue-loader',
                    }
                ]
            }
        ]
    }
}