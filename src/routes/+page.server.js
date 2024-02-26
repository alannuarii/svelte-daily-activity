import { API_ENDPOINT } from '$env/static/private';
import { generateRandomCode } from '../lib/js/random';

export const actions = {
    default: async ({ request }) => {
        const data = await request.formData();

        const fotoFiles = data.getAll('foto')

        const fotoArray = []
        fotoFiles.forEach(file => {
            fotoArray.push(file)
        })

        const jsonData = {
            tanggal: data.get('tanggal'),
            jenis: data.get('jenis'),
            perusahaan: data.get('perusahaan') === null ? 'PLN NP' : data.get('perusahaan'),
            pekerjaan: data.get('pekerjaan'),
            kode: generateRandomCode(),
            foto: fotoArray
        };

        const res = await fetch(`${API_ENDPOINT}/api/activity`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' // Tentukan tipe konten sebagai JSON
            },
            body: JSON.stringify(jsonData) // Ubah objek data menjadi string JSON
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