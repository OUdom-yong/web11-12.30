var Prouoct =[
    {name:"ទឺកគ្រឿង" ,pic:"kh1.jpg",disscriptions:"នំបញ្ចុក៖ អាហារមួយមុខនេះក៏ល្បីល្បាញផងដែរ ដែលត្រូវបានផលិតចេញពីអង្គរ។ អាហារពេញនិយមមួយមុខនេះ ទេសចរមកកាន់កម្ពុជាមិនដែលរំលងឡើយ ហើយក៏អាចបរិភោគជំនួសបាយម្ដងម្កាលដែរ។នំបញ្ចុកត្រូវបានគេញាំជាមួយសម្លរប្រហើរ(សម្លរខ្មែរ) និងសម្លរការីសាច់មាន់ជាដើម ព្រមទាំងបន្លែចម្រុះមួយចំនួនទៀត ដែលបន្ថែមរសជាតិដល់អាហារមួយមុខនេះ។ នំបញ្ចុក ក៏ត្រូវបានរដ្ឋាភិបាលកម្ពុជា បានគ្រោងស្នើសុំ ដាក់ចូលទៅក្នុងបញ្ជីបេតិកភណ្ឌពិភពលោកអរូបិយរបស់អង្គការយូណេស្កូ (UNESCO)ផងដែរ។" },
    {name:"ប្រហុក" ,pic:"kh2.jpg",disscriptions:"ហហ្មុក៖ ជាម្ហូបតំណាងប្រទេសកម្ពុជា។ ម្ហូបមួយមុខនេះ ជាការផ្សំបញ្ចូលគ្នារវាងគ្រឿងការី សាច់ត្រី ខ្ទិះដូង ប្រហុក  ស្លឹកញ គ្រឿងទេសផ្សេងៗ ព្រមទាំងអប់ដោយស្លឹកចេក។ ពាក់ព័ន្ធនឹងមុខម្ហូបមួយមុខនេះនាសន្និសីទអន្តរជាតិលើកទី១ ឆ្នាំ២០១៩ ស្ដីពីទេសចរណ៍ម្ហូបអាហារកម្ពុជា រាជរដ្ឋាភិបាលកម្ពុជាគ្រោងនឹងស្នើសុំដាក់សម្លហហ្មុក រួមជាមួយម្ហូបអាហារ៤មុខទៀត ចូលទៅក្នុងបញ្ជីបេតិកភណ្ឌពិភពលោកអរូបិយរបស់អង្គការយូណេស្កូ (UNESCO)ផងដែរ។" },
    {name:"ម្ហូបខ្មែរ" ,pic:"kh3.jpg",disscriptions:"ប្រហុកខ្ទិះ៖ ជាម្ហូបប្រពៃណីមួយបែបទៀត ដែលមានអាយុកាលចំណាស់ និងពេញនិយមក្នុងខេត្តសៀមរាប ដោយគេបរិភោគវា ជាមួយនឹងបន្លែស្រស់ៗ។ គ្រឿងផ្សំដែលយកមកប្រើក្នុងម្ហូបមួយមុខនេះ រួមមាន ប្រហុកសាច់ចិញ្រ្ចាំ, សាច់ជ្រូកបីជាន់ចិញ្ច្រាំ, គ្រឿងបុក, ត្រប់ពុតលំញង,ខ្ទិះដូង, ម្ទេសឆ្អើរចិញ្រ្ចាំ និងគ្រឿងទេសផ្សេងៗទៀត៕" }
]

var result="";
Prouoct.map((e)=>{
    result+=`
    <div class="col-xl-3 col-md-6 col-sm-12 mt-2">
        <div class="card p-3">
          <img src="img/${e.pic}" alt="">
            <div class="card-body">
                <h3 class="name">${e.name}</h3>
                <p class="disscriptions">${e.disscriptions}</p>
            <div>
        <div>
    <div>
      
    `;
    document.querySelector(".row").innerHTML=result;
})