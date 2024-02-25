<script>
  let selected = "internal";
  // export let form;
  // console.log(form);
</script>

<section>
  <div class="p-3">
    <h3 class="text-center mb-4 text-info">INPUT DATA</h3>
    <form method="POST" enctype="multipart/form-data">
      <div class="modal-body mx-3">
        <div class="mb-4 mx-1 d-flex justify-content-evenly">
          <div class="form-check">
            <input class="form-check-input" type="radio" name="jenis" id="flexRadioDefault1" value="internal" bind:group={selected} checked />
            <label class="form-check-label" for="flexRadioDefault1">Internal</label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="jenis" id="flexRadioDefault1" value="eksternal" bind:group={selected} />
            <label class="form-check-label" for="flexRadioDefault1">Eksternal</label>
          </div>
        </div>
        <div class="mb-4">
          <label for="exampleFormControlInput1" class="form-label">Tanggal</label>
          <input type="date" name="tanggal" class="form-control" id="exampleFormControlInput1" required />
        </div>
        {#if selected === "eksternal"}
          <div class="mb-4">
            <label for="exampleFormControlInput1" class="form-label">Nama Perusahaan</label>
            <input type="text" name="perusahaan" class="form-control" id="exampleFormControlInput1" required />
          </div>
        {/if}
        <div class="mb-4">
          <label for="exampleFormControlInput1" class="form-label">Nama Pekerjaan</label>
          <input type="text" name="pekerjaan" class="form-control" id="exampleFormControlInput1" required />
        </div>
        <div class="mb-5">
          <label for="exampleFormControlInput1" class="form-label">Dokumentasi</label>
          <input type="file" name="foto" class="form-control" id="exampleFormControlInput1" multiple accept="image/*" />
        </div>
      </div>
      <div class="text-center action">
        <button type="reset" class="btn btn-secondary">Reset</button>
        <button type="submit" class="btn btn-info">Submit</button>
      </div>
    </form>
  </div>
</section>

<style>
  .action .btn {
    width: 100px;
  }
  h3 {
    font-weight: 900;
  }
</style>
