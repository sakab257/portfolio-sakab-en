import React from 'react'
import ProjectCard from './project-card'

const ProjectList = () => {
  return (
    <>
          <ProjectCard title='Resumind' link='https://resumind-sakab.vercel.app/' description='
          Resumind permet d&apos;analyser, noter et améliorer votre CV grâce à l&poas;IA pour maximiser vos chances auprès des recruteurs.
          ' imageUrl='/projets/images/resumind.svg' techno={[
            {name:"React",url:"/projets/technos/React.svg"},
            {name:"NextJS",url:"/projets/technos/NextJS.png"},
            {name:"PuterJS",url:"/projets/technos/puter.png"},]}
          />
        <ProjectCard title='IntelliDraw' link='https://github.com/sakab257/digit-recognizer' description='
          IntelliDraw permet de dessiner des chiffres à la main et d&apos;obtenir une prédiction grâce à un modèle de deep learning entraîné sur le dataset MNIST.
          ' imageUrl='/projets/images/github.svg' techno={[
            {name:"Python",url:"/projets/technos/python.png"}]}
          />
          <ProjectCard title='Sortify' link='https://sortify-sakab.vercel.app/' description='
          Sortify permet aux utilisateurs de visualiser, comparer et comprendre les algorithmes de tri avec une interface interactive et moderne.
          ' imageUrl='/projets/images/sortify.svg' techno={[
            {name:"React",url:"/projets/technos/React.svg"},
            {name:"NextJS",url:"/projets/technos/NextJS.png"},]}
          />
          <ProjectCard title='Cinespark' link='https://cinespark-sakab.vercel.app/' description='
          CineSpark permet aux utilisateurs de rechercher, découvrir et sauvegarder leurs films préférés avec une interface élégante et responsive.
          ' imageUrl='/projets/images/cinespark.svg' techno={[
            {name:"React",url:"/projets/technos/React.svg"},
            {name:"TMDB",url:"/projets/technos/tmdb.png"},]}
          />
          <ProjectCard title='HD News' link='https://honeydropnews.vercel.app/' description='
          Honey Drop News permet de partager les actualités de l&apos;équipe Honey Drop avec humour, bugs épiques et victoires codées en mode café++.
          ' imageUrl='/projets/images/hdnews.svg' techno={[
            {name:"React",url:"/projets/technos/NextJS.png"},
            {name:"GraphQL",url:"/projets/technos/graphql.png"},
            {name:"Docker",url:"/projets/technos/docker.png"},
            {name:"Drupal",url:"/projets/technos/drupal.png"},]}
          />
          {/* <ProjectCard title='ADEM' link='/' description='
          Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore
          ' imageUrl='/projets/images/github.svg' techno={[]}
          /> */}
          <ProjectCard title='Jav&apos;Grympe' link='https://github.com/sakab257/jav-grympe' description='
          Jav&apos;Grympe permet aux grimpeurs de parcourir, sélectionner et acheter tout l&pos;équipement d&pos;escalade avec un système de paiement fluide.
          ' imageUrl='/projets/images/github.svg' techno={[
            {name:"Java",url:"/projets/technos/java.png"}]}
          />
          <ProjectCard title='PlagiC' link='https://github.com/sakab257/plagic' description='
          PlagiC permet d&apos;analyser, comparer et mesurer la similarité entre fichiers C avec des algorithmes de détection performants.
          ' imageUrl='/projets/images/github.svg' techno={[
            {name:"C",url:"/projets/technos/c.png"}]}
          />
    </>
  )
}

export default ProjectList