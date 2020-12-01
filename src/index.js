import fs from 'fs' // for importing files
import matter from 'gray-matter' //for changing string and returning as obj
import marked from 'marked' //for changing markdown into html
import mkdirp from 'mkdirp' //for using mkdir -p
import path from 'path' //for using path
import glob from 'glob'

//process the template


//-add the markdown file
// -process the headers
//- read content
//-return as obj
//inject into template
//save file


const readFile = filename => {
    const rawFile = fs.readFileSync(filename, 'utf-8') //we use readFileSync to read file synchronously.
    const parsed = matter(rawFile) //parse that rawfile and return as obj
    const html = marked(parsed.content) //changes that object into html
    return { ...parsed, html }
}

readFile(path)