<div className='flex flex-col items-center justify-center relative'>
<svg viewBox="0 0 168 168" xmlns="http://www.w3.org/2000/svg" className='absolute'>
  <path id="circlePath" d="M168 84A84 84 0 0 0 0 84A84 84 0 0 0 168 84" fill="none" />
  <text>
    <textPath xlinkHref="#circlePath" startOffset="59%" className=' text-xl font-medium' fill="gray">
      Upload Your Avatar
    </textPath>
  </text>
</svg>
<input
  id="avatarInput"
  type="file"
  name="avatar"
  onChange={handleAvatarChange}
  className="hidden"
/>
<div
  className=" flex w-[168px] h-[168px] py-5 px-[22px] rounded-full cursor-pointer z-10"
>
  <div
    htmlFor="avatarInput"
    onClick={handleAvatarClick}
    className=" flex w-32 h-32 rounded-full cursor-pointer border-2 border-slate-400">
    {formData.avatar ? (
      <img src={URL.createObjectURL(formData.avatar)} alt="Avatar" className="w-32 h-32 rounded-full object-cover" />
    ) : (
      <span className=" text-6xl text-gray-600 mx-10 my-6">+</span>
    )}
  </div>
</div>
</div>

const handleAvatarChange = (e) => {
    const file = e.target.files[0];

    if (file.type.startsWith('image/')) {
      setFormData({ ...formData, avatar: file });
      const img = new FormData();
      img.append('file', file);
      setAvatar(img);
    } else {
      alert('Please upload an image file');
      e.target.value = null;
    }
  };

  const handleAvatarClick = () => {
    document.getElementById('avatarInput').click();
  };

  const [avatar, setAvatar] = useState(null);

  setAvatar({ ...avatar, 'name': formData.firstname });

  // response = await fetch('http://localhost:5000/upload', avatar, {
  //   headers: { 'Content-Type': 'multipart/form-data' }
  // });
  // data = await response.json();
  console.log(avatar);