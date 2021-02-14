self.addEventListener('message', async (event) => {
    const {
        url,
        uid
    } = event.data

    const response = await fetch(url)
    const blob = await response.blob()
    const blobUrl = URL.createObjectURL(blob)

    self.postMessage({
        uid,
        blobUrl
    })
})