function printReport(pages) {
    console.log("========");
    console.log("REPORT");
    console.log("========");
    const sorttedPages=sortPages(pages)
    for(const sortedPage of sorttedPages){
        const url=sortedPage[0]
        const hits=sortedPage[1]
        console.log(`Found ${hits} links to pages: ${url}`)
    }
    console.log("========");
    console.log("END REPORT");
    console.log("========");
}

function sortPages(pages) {
    const pagesArr=Object.entries(pages)
    pagesArr.sort((a,b)=>{
        aHits=a[1]
        bHits=b[1]
        return b[1]-a[1]
    })
    return pagesArr
}

module.exports={sortPages, printReport}