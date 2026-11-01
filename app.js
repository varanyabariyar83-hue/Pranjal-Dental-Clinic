(function(){
  var $=function(i){return document.getElementById(i)};
  var m=$('menu'),n=$('nav');
  if(m&&n){
    m.addEventListener('click',function(){var o=n.classList.toggle('open');m.setAttribute('aria-expanded',o)});
    n.addEventListener('click',function(e){
      var a=e.target.closest('a');if(!a)return;
      var dd=a.closest('.has-dd');
      // on mobile, the "Dental Services" link toggles its submenu instead of navigating
      if(dd&&a.parentNode===dd&&window.innerWidth<=1060){e.preventDefault();dd.classList.toggle('open');return}
      n.classList.remove('open');m.setAttribute('aria-expanded','false');
    });
  }
  var d=$('d');
  if(d){var t=new Date();d.min=t.getFullYear()+'-'+String(t.getMonth()+1).padStart(2,'0')+'-'+String(t.getDate()).padStart(2,'0')}
  var bf=$('bf');
  if(bf){bf.addEventListener('submit',function(e){e.preventDefault();
    var tm=document.querySelector('input[name=t]:checked').value;
    var msg='Hello Pranjal Dental Clinic, I would like to book an appointment.\n\nName: '+$('n').value+'\nPhone: '+$('p').value+'\nReason: '+$('r').value+'\nPreferred date: '+($('d').value||'Any')+'\nPreferred time: '+tm;
    window.open('https://wa.me/919971261414?text='+encodeURIComponent(msg),'_blank');
  })}
  var els=document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{threshold:.12});
    els.forEach(function(el){io.observe(el)});
  }else{els.forEach(function(el){el.classList.add('in')})}
})();
