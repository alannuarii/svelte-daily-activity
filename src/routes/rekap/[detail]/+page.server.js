import { API_ENDPOINT } from '$env/static/private'
import { PUBLIC_API_ENDPOINT } from '$env/static/public'
import { redirect } from '@sveltejs/kit';

export const load = async (params) => {
    const kode = params.params.detail

    const res = await fetch(`${API_ENDPOINT}/get-activity-param/${kode}`);
    const data = await res.json();

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

        const res = await fetch(`${API_ENDPOINT}/input-photos/${params.detail}`, {
            method: 'POST',
            body: formData
        });

        return res.json();
    }
};