const Menuitems = [
  {
    navlabel: true,
    subheader: 'ENEFUT Panel Administrativo',
    icon: 'mdi mdi-dots-horizontal',
    href: 'Dashboard',
  },
  {
    title: 'Estadisticas',
    icon: 'pie-chart',
    href: '/dashboards/dashboard1',
  },
  {
    title: 'Asistencia',
    icon: 'users',
    href: '/customers',
    collapse: true,
    children: [
      {
        title: 'Listados',
        icon: 'list',
        href: 'asistencias',
      },
      {
        title: 'Edit',
        icon: 'edit',
        href: '/form-layouts/form-layouts',
      },
    ],
  },
  {
    title: 'Practicas',
    icon: 'activity',
    href: '/shop',
    collapse: true,
    children: [
      {
        title: 'Listados',
        icon: 'list',
        href: 'practicas',
      },
      {
        title: 'Detalle',
        icon: 'file-text',
        href: '/form-layouts/form-custom',
      },
    ],
  },
  {
    title: 'Calificaciones',
    icon: 'book',
    href: '/form-elements',
    collapse: true,
    children: [
      {
        title: 'Listados',
        icon: 'disc',
        href: 'calificaciones',
      },
      {
        title: 'Detalle',
        icon: 'file-text',
        href: '/form-layouts/form-wizard',
      },
    ],
  },
  {
    title: 'Documentos',
    icon: 'file-text',
    href: '/tables',
    collapse: true,
    children: [
      {
        title: 'Listados',
        icon: 'disc',
        href: 'documentos',
      },
      {
        title: 'Detalle',
        icon: 'file-text',
        href: '/shop/shop-detail',
      },
    ],
  },
  {
    title: 'Matriculas',
    icon: 'user-plus',
    href: '/tables',
    collapse: true,
    children: [
      {
        title: 'Listados',
        icon: 'disc',
        href: 'matriculas',
      },
      {
        title: 'Detalle',
        icon: 'file-text',
        href: '/shop/shop-detail',
      },
    ],
  },
  {
    title: 'Pagos',
    icon: 'dollar-sign',
    href: '/tables',
    collapse: true,
    children: [
      {
        title: 'Listados',
        icon: 'disc',
        href: 'pagos',
      },
      {
        title: 'Detalle',
        icon: 'file-text',
        href: '/shop/shop-detail',
      },
    ],
  },
  {
    title: 'Instructores',
    icon: 'user-check',
    href: '/tables',
    collapse: true,
    children: [
      {
        title: 'Listados',
        icon: 'disc',
        href: 'instructores',
      },
      {
        title: 'Detalle',
        icon: 'file-text',
        href: '/shop/shop-detail',
      },
    ],
  },

];

export default Menuitems;
