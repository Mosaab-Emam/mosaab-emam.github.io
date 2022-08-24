import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const ProjectList = () => (
  <Section
    title={
      <>
        Recent <GradientText>Projects</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="TicketNile"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        bibendum. Nunc non posuere consectetur, justo erat semper enim, non
        hendrerit dui odio id enim."
        link="/"
        img={{
          src: '/assets/images/project-fire.png',
          alt: 'Project Web Design',
        }}
        category={
          <>
            <Tags color={ColorTags.EMERALD}>Vue</Tags>
            <Tags color={ColorTags.SKY}>Vuetify</Tags>
            <Tags color={ColorTags.ROSE}>Nest</Tags>
            <Tags color={ColorTags.LIME}>MongoDB</Tags>
            <Tags color={ColorTags.SKY}>Typescript</Tags>
            <Tags color={ColorTags.LIME}>Jest</Tags>
          </>
        }
      />
      <Project
        name="Aljameela"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        bibendum. Nunc non posuere consectetur, justo erat semper enim, non
        hendrerit dui odio id enim."
        link="/"
        img={{
          src: '/assets/images/project-web-design.png',
          alt: 'Project Web Design',
        }}
        category={
          <>
            <Tags color={ColorTags.EMERALD}>Vue</Tags>
            <Tags color={ColorTags.SKY}>Vuetify</Tags>
            <Tags color={ColorTags.ROSE}>Laravel</Tags>
            <Tags color={ColorTags.INDIGO}>Bootstrap</Tags>
            <Tags color={ColorTags.SKY}>MYSQL</Tags>
            <Tags color={ColorTags.LIME}>Cordova</Tags>
          </>
        }
      />
      <Project
        name="African Folklife"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        bibendum. Nunc non posuere consectetur, justo erat semper enim, non
        hendrerit dui odio id enim."
        link="/"
        img={{
          src: '/assets/images/project-maps.png',
          alt: 'Project Web Design',
        }}
        category={
          <>
            <Tags color={ColorTags.EMERALD}>Nuxt</Tags>
            <Tags color={ColorTags.SKY}>Vuetify</Tags>
            <Tags color={ColorTags.INDIGO}>Strapi</Tags>
            <Tags color={ColorTags.LIME}>MongoDB</Tags>
            <Tags color={ColorTags.ROSE}>Cordova</Tags>
          </>
        }
      />
      <Project
        name="Sudan Diabetes Federation"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        bibendum. Nunc non posuere consectetur, justo erat semper enim, non
        hendrerit dui odio id enim."
        link="/"
        img={{
          src: '/assets/images/project-web-design.png',
          alt: 'Project Web Design',
        }}
        category={
          <>
            <Tags color={ColorTags.EMERALD}>Vue</Tags>
            <Tags color={ColorTags.BLUE}>Quasar</Tags>
            <Tags color={ColorTags.INDIGO}>Strapi</Tags>
            <Tags color={ColorTags.LIME}>MongoDB</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
