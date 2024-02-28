import { API_ENDPOINT } from '$env/static/private'
import { PUBLIC_API_ENDPOINT } from '$env/static/public'
import { redirect } from '@sveltejs/kit';

export const load = async (params) => {
    const kode = params.params.detail

    const [res1, res2] = await Promise.all([
        fetch(`${API_ENDPOINT}/api/activity1/${kode}`).then((res) => res.json()),
        fetch(`${API_ENDPOINT}/api/activity2/${kode}`).then((res) => res.json())])

    let data

    if (res1.data.length > 0) {
        data = res1.data
    } else {
        data = res2.data
    }

    console.log(data)
    return {
        data: data,
        endpoint: PUBLIC_API_ENDPOINT
    };
};

export const actions = {
    default: async ({ request, params }) => {

        const data = await request.formData();

        const formData = new FormData();
        formData.append('tanggal', data.get('tanggal'));
        formData.append('pekerjaan', data.get('pekerjaan'));
        formData.append('kode', data.get('kode'));

        if (data.get('kode')) {
            await fetch(`${API_ENDPOINT}/delete-data/${data.get('kode')}`, {
                method: 'DELETE'
            });

            throw redirect(302, '/rekap')
        }

        const fotoFiles = data.getAll('foto');
        fotoFiles.forEach((file) => {
            formData.append('foto', file);
        });

        const res = await fetch(`${API_ENDPOINT}/api/photos/${params.detail}`, {
            method: 'POST',
            body: formData
        });

        return res.json();
    }
};