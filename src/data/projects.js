import portfolioImage from '../assets/projects/portfolio.png'
import tasksImage from '../assets/projects/tasks.jpg'
import shopImage from '../assets/projects/shop.jpg'

const projects = [
    {
        id: 1,
        title: 'Portfolio React',
        description: 'Portfolio personal desarrollado con React.',
        technologies: ['React', 'JavaScript', 'CSS'],
        image: portfolioImage,
        github:'#',
        demo:'#'
    
    },
    {
        id: 2,
        title: 'Gestor de tareas',
        description: 'Aplicación para gestionar tareas.',
        technologies: ['React', 'JavaScript', 'LocalStorage'],
        image: tasksImage,
        github:'#',
        demo:'#'

    },
    {
        id: 3,
        title: 'Tienda online',
        description: 'Ecommerce desarrollada con React.',
        technologies: ['React', 'JavaScript', 'API'],
        image: shopImage,
        github:'#',
        demo:'#'
    }
]
export default projects