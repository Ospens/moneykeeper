export const tableData = () => {
    return fetch('/api/table')
        .then(res => res.json())
}