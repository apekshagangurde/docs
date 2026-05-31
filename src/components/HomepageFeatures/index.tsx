import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Flexible Assessment Creation",
    Svg: require("@site/static/img/undraw_online-test_cqv0.svg").default,
    description: (
      <>
        Create and customize assessments using multiple question types,
        including MCQs, open-ended questions, ratings, and more. Organize
        questions by topics, skills, regions, and other classifications.
      </>
    ),
  },
  {
    title: "Reusable Assessments & Participation",
    Svg: require("@site/static/img/undraw_key-insights_ex8y.svg").default,
    description: (
      <>
        Combine questions into assessments, tests, and quizzes. Save them as
        reusable templates or deploy them directly to participants, with support
        for both anonymous and registered participation.
      </>
    ),
  },
  {
    title: "Insights Through Assessment Data",
    Svg: require("@site/static/img/undraw_app-benchmarks_ls0m.svg").default,
    description: (
      <>
        Collect assessment data and analyze results to generate meaningful
        insights, helping organizations evaluate learning outcomes and measure
        the effectiveness of their interventions.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
