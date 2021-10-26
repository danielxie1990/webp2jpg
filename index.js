const webp=require('webp-converter');

//pass input image(.webp image) path ,output image(.jpeg,.pnp .....)

//dwebp(input,output,option)

for ( let i=1; i < 8; i++) {
    const result = webp.dwebp(`1 (${i}).webp`,`tin box printing (${i}).jpg`,"-o",logging="-v");
result.then((response) => {
  console.log(response);
});
}