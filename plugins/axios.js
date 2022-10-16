export default function ({ $axios, redirect }) {
    $axios.onError((error) => {
        redirect('/404/')
        // if (error.response.status === 404) {
        // }
    })
}
