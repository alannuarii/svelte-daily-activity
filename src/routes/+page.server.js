import { API_ENDPOINT } from '$env/static/private';
import { generateRandomCode } from '../lib/js/random'

export const actions = {
    default: async ({ request }) => {
        const data = await request.formData();

        const formData = new FormData();

        formData.append('tanggal', data.get('tanggal'));
        formData.append('jenis', data.get('jenis'));
        if (data.get('perusahaan') === null) {
            formData.append('perusahaan', 'PLN NP');
        } else {
            formData.append('perusahaan', data.get('perusahaan'));
        }
        // const fotoFiles = data.getAll('foto');
        // fotoFiles.forEach((file) => {
        //     formData.append('foto', file);
        // });
        formData.append('pekerjaan', data.get('pekerjaan'));
        formData.append('kode', generateRandomCode())

        console.log(formData)

        const res = await fetch(`${API_ENDPOINT}/api/activity`, {
            method: 'POST',
            body: formData
        });

        return res.json();
    }
};

// export const load = async () => {
//     const res = await fetch(`${API_ENDPOINT}/check-data`);
//     const data = await res.json();

//     return {
//         data: data,
//     };
// };