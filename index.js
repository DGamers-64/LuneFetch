async function LuneFetch(url, type = "json", options = {}) {
    const res = await fetch(url, options)
    let data

    if (type == "json") {
        data = await res.json()
    } else if (type == "text") {
        data = await res.text()
    } else if (type == "arrayBuffer") {
        data = await res.arrayBuffer
    } else if (type == "blob") {
        data = await res.blob()
    } else if (type == "bytes") {
        data = await res.bytes()
    } else if (type == "formData") {
        data = await res.formData()
    }
    
    return data
}