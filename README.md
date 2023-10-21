# Mini-Reto-1-Mi-Pagina-Retro

## Documentación

1. Definición general del proyecto
    
    En este proyecto se creó una página web que simula la página inicial de Yahoo de 1995 y busca mostrar un poco de las funcionalidades que había en este entonces. 
    
    La página está creada para acceso público y para que cualquier persona con acceso al repositorio y a los archivos. 
    
2. Especificaciones y requerimientos
    
    Para el buen funcionamiento del proyecto es necesario alguno de los buscadores que soporten HTML, como Google Chrome, Safari, Firefox, entre otros más.
    
    Dentro de las limitaciones del sistema las únicas funcionas las cuales son meramente de “decoración” es la barra de búsqueda y la barra donde está el correo @yahoo.com.
    
3. Procedimiento de instalación
    
    La arquitectura del sistema está montada y diseñada para su optima funcionalidad dentro de un servidor local. El ejecutable principal lleva por nombre index.html.
    
    Adicionalmente se requiere de la instalación de la fuente Yahoo, la cual se encuentra dentro de nuestra carpeta dashboard. 
    
4. Procedimiento de desarrollo
    
    El programa cuenta con 3 funcionalidades básicas donde utilizamos las herramientas de Ajax, jQuery y Bootstrap donde se implementan funciones muy simples como animaciones o contenedores de botones, etc.
    

### Arquitectura del Sistema

1. HTML
    
    Dentro de nuestro archivo html nos encontramos con 5 clases principales: 
    
    - Main_title:
        
        Nuestro contenedor engloba lo que es el menú con las principales funciones que te redireccionan a la página oficial de Yahoo.
        
    - Top_Center:
        
        En este contenedor solo mostramos información reelevate del momento la cual está direccionada a una búsqueda de Yahoo.
        
    - Container_Low_CenterTextos:
        
        Este contenedor tiene nuestra barra que simula la del buscador original y nuestro botón de buscar y búsqueda avanzada. 
        
    - Textos:
        
        En este contenedor solo hay palabras relevantes del momento las cuales te direccionan a algunas de las páginas más importantes relacionadas con esas palabras.
        
    - Editor_Dropdown:
        
        En este contenedor/botón tenemos dos botones más los cuales nos muestran la inspiración de donde fue extraído el diseño de esta página y este se actualiza mediante Ajax y se oculta mediante jQuery. 
        
2. CSS
    
    En el archivo CSS se le dio el estilo y el formato a los elementos que componen el HTML, algunos de los contenedores tienen todo el estilo necesario para su contenido, pero otros como el titulo requirieron de su propio formato.
    
3. JavaScript
    
    Dentro del Java Script tenemos dos funciones principales:
    
    - LoadDoc:
        
        Load Document lo que hace es utilizar la funcionalidad de Ajax para insertar la imagen de la inspiración, esto mediante otro html llamado Yahoo.html.
        
    - Alerta:
        
        La función alerta está enlazada al botón de buscar a un lado de la barra de input y lo que nos muestra es una alerta diciendo que el sistema no está completo.
        

### Link a Repositorio

[https://github.com/YahirRivera04/Mini-Reto-1-Mi-Pagina-Retro](https://github.com/YahirRivera04/Mini-Reto-1-Mi-Pagina-Retro)
