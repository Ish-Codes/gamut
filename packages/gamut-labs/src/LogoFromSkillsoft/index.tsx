import { styledOptions, system } from '@codecademy/gamut-styles';
import { StyleProps, variance } from '@codecademy/variance';
import styled from '@emotion/styled';
import React from 'react';

const fromLogoStyles = variance.compose(
  system.layout,
  system.color,
  system.space,
  system.positioning
);

export interface FromLogoIconStyleProps
  extends StyleProps<typeof fromLogoStyles> {}

export interface FromLogoIconProps
  extends Omit<React.SVGProps<SVGSVGElement>, keyof FromLogoIconStyleProps>,
    FromLogoIconStyleProps {}

const StyledSVGWrapper = styled('svg', styledOptions<'svg'>())(fromLogoStyles);

export const LogoFromSkillsoft: React.FC<FromLogoIconProps> = ({
  'aria-hidden': ariaHidden,
  color = 'text',
  height,
  width,
  ...rest
}) => {
  return (
    <StyledSVGWrapper
      aria-hidden={ariaHidden}
      color={color}
      width={width}
      height={height}
      viewBox="0 0 744 257"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>Codecademy from Skillsoft</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 2.647C0 1.85.058 1.307.1.923.153.413.178.18 0 0h308.7c.698 0 1.159.028 1.505.048.486.03.745.045 1.111-.048v156.199c0 .706-.027 1.172-.047 1.523-.029.491-.044.754.047 1.124-.366-.092-.625-.077-1.111-.048-.346.021-.807.048-1.505.048H0v-.012l.055-.208c.043-.265-.018-.389-.044-.088l-.011.201V2.647ZM212.511 31.77c.78 0 1.408.474 1.565.79v90.152c0 .948-.625 1.425-1.408 1.425h-12.361c-.936 0-1.407-.633-1.407-1.425v-4.903h-.157c-2.975 4.43-8.293 7.752-17.055 7.752-10.953 0-19.089-5.221-22.375-15.816-1.719-5.062-2.347-9.65-2.347-18.505 0-8.859.782-13.444 2.347-18.506 3.286-10.441 11.111-15.657 21.905-15.816h9.232c.314.157.471.315.471.633v12.496c0 .315-.157.63-.471.63h-5.319c-5.792.159-9.86 3.164-11.579 8.54-.939 3.006-1.41 6.328-1.41 12.338 0 6.01.469 9.332 1.41 12.337 1.719 5.377 5.944 8.384 11.891 8.384 6.103 0 10.325-2.848 12.049-8.384.623-2.213 1.094-4.744 1.251-8.54V33.193c0-.948.625-1.425 1.407-1.425h12.361ZM28.777 92.724c0 6.957.628 12.178 2.035 16.29 3.755 11.86 13.769 18.188 26.755 18.346 9.7 0 17.212-3.952 22.376-10.121.311-.633.468-1.424-.157-1.898l-8.45-7.593c-.625-.474-1.407-.474-1.876.159-3.129 3.638-6.574 5.695-11.893 5.695-5.79 0-10.168-3.008-12.047-8.541-1.096-3.323-1.41-7.278-1.41-12.337 0-5.062.312-8.858 1.253-12.178 1.879-5.695 6.26-8.54 12.047-8.54 5.319 0 8.605 2.053 11.893 5.691.469.794 1.248.794 1.876.318l8.45-7.593c.625-.474.625-1.422.157-1.898-5.162-6.325-12.675-10.28-22.376-10.28-12.988 0-22.843 6.486-26.597 18.188-1.408 4.114-2.036 9.332-2.036 16.292Zm290.388 0c0 6.957.628 12.178 2.035 16.29 3.754 11.86 13.612 18.188 26.598 18.346 9.701 0 17.211-3.952 22.376-10.121.313-.633.468-1.424-.157-1.898l-8.45-7.593c-.626-.474-1.408-.474-1.876.159-3.129 3.638-6.574 5.695-11.893 5.695-5.787 0-10.169-3.008-12.047-8.541-1.096-3.323-1.41-7.278-1.41-12.337 0-5.062.316-8.858 1.41-12.178 1.878-5.695 6.26-8.54 12.047-8.54 5.319 0 8.604 2.053 11.893 5.691.468.794 1.248.794 1.876.318l8.45-7.593c.625-.474.625-1.422.157-1.898-5.008-6.325-12.675-10.28-22.376-10.28-12.986 0-22.844 6.486-26.598 18.188-1.407 4.114-2.035 9.332-2.035 16.292Zm342.5 32.897c-.782 0-1.407-.477-1.407-1.424v-37.96c0-8.54-4.225-14.39-12.205-14.39-7.822 0-12.361 5.85-12.361 14.39v37.96c0 .791-.471 1.424-1.407 1.424h-12.361c-.785 0-1.408-.477-1.408-1.424v-37.96c0-8.54-4.225-14.39-12.206-14.39-7.823 0-12.361 5.85-12.361 14.39v37.96c0 .791-.469 1.424-1.408 1.424H582.18c-.78 0-1.407-.477-1.407-1.424V61.09c0-.79.47-1.422 1.407-1.422h12.361c.785 0 1.408.474 1.408 1.422v4.746h.157c2.817-4.11 8.45-7.592 17.057-7.592 7.665 0 13.768 3.163 17.679 8.7h.157c5.005-5.537 11.422-8.7 20.652-8.7 15.021 0 23.471 10.439 23.471 24.515v41.597c0 .791-.471 1.424-1.41 1.424l-12.047-.159Zm29.51 21.826c0 .947.625 1.424 1.41 1.424l4.225.159c10.794 0 16.115-4.906 21.747-20.563l24.409-68.799c.314-.948-.312-1.424-1.096-1.424h-12.675c-.78 0-1.248.632-1.562 1.424l-13.926 43.021h-.314l-14.55-43.021c-.157-.948-.783-1.424-1.565-1.424H683.98c-.784 0-1.41.632-1.098 1.424l23.628 62.157-1.878 5.535c-2.035 5.377-4.536 7.752-9.701 7.752h-2.346c-.939 0-1.41.63-1.41 1.422v10.913Zm-561.233-42.548c1.096-3.478 1.407-6.645 1.407-12.178 0-5.533-.314-8.54-1.407-12.178-1.878-5.536-6.103-8.54-12.047-8.54-5.947 0-10.326 3.163-12.204 8.54-1.099 3.479-1.41 6.486-1.41 12.178 0 5.533.313 8.7 1.41 12.178 1.878 5.536 6.103 8.544 12.204 8.544 5.944.156 10.169-3.008 12.047-8.544ZM88.947 92.721c0 7.278.785 11.705 2.193 16.29 3.754 11.545 13.611 18.188 26.598 18.188 12.986 0 22.844-6.643 26.441-18.188 1.564-4.744 2.192-9.012 2.192-16.29 0-7.275-.782-11.704-2.192-16.29-3.597-11.545-13.455-18.187-26.441-18.187-13.146 0-23.001 6.642-26.598 18.188-1.565 4.744-2.192 9.014-2.192 16.29Zm317.3-34.477c19.712 0 26.912 6.96 27.226 23.09v42.863c0 .947-.628 1.424-1.41 1.424h-11.265c-.939 0-1.408-.633-1.408-1.424v-4.745h-.157c-2.974 4.43-9.075 7.593-18.15 7.593-11.89 0-21.748-6.33-21.748-20.088 0-14.233 9.858-20.878 25.816-20.878h5.321c.937 0 1.407.635 1.407 1.424v8.7c0 .947-.627 1.421-1.407 1.421h-2.974c-9.701 0-13.923 2.69-13.923 8.859 0 5.535 3.911 8.223 11.105 8.223 9.232 0 14.396-3.638 14.396-11.228V81.494c-.311-7.12-3.911-10.28-14.396-10.28-7.197 0-11.576 2.056-14.708 4.588-.622.47-1.407.312-1.876-.318l-5.007-9.017c-.314-.63-.157-1.263.314-1.737 5.162-3.955 12.204-6.486 22.844-6.486ZM247.826 86.082l.003-.003c-.314 0-.628.159-.628.635v10.278c0 .317.157.635.628.635h33.172c.937 0 1.407-.477 1.407-1.424 0-10.598-.627-15.183-2.192-19.771-3.6-11.228-13.3-18.188-26.6-18.188-12.83 0-22.842 6.645-26.441 18.188-1.405 4.273-2.19 9.488-2.19 16.292 0 6.799.939 11.86 2.347 16.131 3.599 11.545 13.3 18.347 26.911 18.347 11.891 0 20.966-4.588 26.598-11.228.471-.636.471-1.425-.157-1.898l-7.822-7.119c-.625-.474-1.407-.474-2.032.317-3.286 3.638-7.823 6.328-15.179 6.328-7.194 0-12.361-3.482-14.394-9.965l-.005-.016c-.312-.945-.624-1.888-.78-2.833a53.865 53.865 0 0 1-.779-9.488c.157-3.797.314-6.169.782-9.174v-.318c.157-.788.314-1.421.471-2.054 1.719-5.38 6.569-8.54 12.67-8.54 6.103 0 10.799 3.16 12.518 8.54.471 1.58.785 3.32.785 5.533 0 .477-.314.794-.785.794h-18.308Zm287.772 0 .002-.003c-.314 0-.628.159-.628.635v10.278c0 .317.157.635.628.635h33.173c.936 0 1.407-.477 1.407-1.424 0-10.598-.628-15.183-2.192-19.771-3.6-11.228-13.301-18.188-26.601-18.188-12.829 0-22.841 6.645-26.441 18.188-1.407 4.273-2.189 9.488-2.189 16.292 0 6.799.939 11.86 2.346 16.131 3.6 11.545 13.3 18.347 26.912 18.347 11.89 0 20.965-4.588 26.598-11.228.471-.636.471-1.425-.157-1.898l-7.822-7.119c-.625-.474-1.408-.474-2.033.317-3.286 3.638-7.822 6.328-15.179 6.328-7.194 0-12.361-3.482-14.393-9.965l-.006-.017c-.312-.945-.623-1.887-.779-2.832a53.771 53.771 0 0 1-.78-9.488c.157-3.797.314-6.169.782-9.174v-.318c.157-.787.314-1.42.471-2.05v-.004c1.719-5.38 6.569-8.54 12.67-8.54 6.104 0 10.799 3.16 12.518 8.54.471 1.58.785 3.32.785 5.533 0 .477-.314.794-.785.794h-18.307Zm-35.315-54.313c.779 0 1.407.474 1.721 1.266v90.15c0 .948-.625 1.425-1.41 1.425h-12.361c-.936 0-1.405-.633-1.405-1.425v-4.9h-.157c-3.131 4.426-8.45 7.749-17.211 7.749-10.954 0-19.09-5.221-22.376-15.816-1.718-5.062-2.346-9.806-2.346-18.664 0-9.015.782-13.603 2.346-18.665 3.286-10.436 11.265-15.657 22.062-15.815h9.075c.937 0 1.408.632 1.408 1.424V69.41c0 .95-.626 1.424-1.408 1.424h-5.318c-5.792.156-9.86 3.164-11.579 8.54-.939 3.005-1.41 6.328-1.41 12.338 0 6.01.468 9.332 1.41 12.337 1.719 5.533 5.787 8.54 11.89 8.54 6.103 0 10.326-3.007 12.05-8.54.622-2.214 1.093-4.747 1.25-8.541V33.194c0-.948.626-1.425 1.408-1.425h12.361ZM368.871 145.61c0-1.991-.458-2.647-2.616-2.647h-41.858c-2.237 0-2.616.492-2.616 2.647v10.59c0 1.991.458 2.647 2.616 2.647h41.858c2.006 0 2.616-.492 2.616-2.647v-10.59Zm-73.251-2.647H15.697V15.885H295.62v124.429c0 .803-.059 1.346-.1 1.731-.054.508-.079.737.1.917Z"
        fill="currentColor"
      />
      <mask
        id="a"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="744"
        height="159"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 2.647C0 1.85.058 1.307.1.923.153.413.178.18 0 0h308.7c.698 0 1.159.028 1.505.048.486.03.745.045 1.111-.048v156.199c0 .706-.027 1.172-.047 1.523-.029.491-.044.754.047 1.124-.366-.092-.625-.077-1.111-.048-.346.021-.807.048-1.505.048H0v-.012l.055-.208c.043-.265-.018-.389-.044-.088l-.011.201V2.647ZM212.511 31.77c.78 0 1.408.474 1.565.79v90.152c0 .948-.625 1.425-1.408 1.425h-12.361c-.936 0-1.407-.633-1.407-1.425v-4.903h-.157c-2.975 4.43-8.293 7.752-17.055 7.752-10.953 0-19.089-5.221-22.375-15.816-1.719-5.062-2.347-9.65-2.347-18.505 0-8.859.782-13.444 2.347-18.506 3.286-10.441 11.111-15.657 21.905-15.816h9.232c.314.157.471.315.471.633v12.496c0 .315-.157.63-.471.63h-5.319c-5.792.159-9.86 3.164-11.579 8.54-.939 3.006-1.41 6.328-1.41 12.338 0 6.01.469 9.332 1.41 12.337 1.719 5.377 5.944 8.384 11.891 8.384 6.103 0 10.325-2.848 12.049-8.384.623-2.213 1.094-4.744 1.251-8.54V33.193c0-.948.625-1.425 1.407-1.425h12.361ZM28.777 92.724c0 6.957.628 12.178 2.035 16.29 3.755 11.86 13.769 18.188 26.755 18.346 9.7 0 17.212-3.952 22.376-10.121.311-.633.468-1.424-.157-1.898l-8.45-7.593c-.625-.474-1.407-.474-1.876.159-3.129 3.638-6.574 5.695-11.893 5.695-5.79 0-10.168-3.008-12.047-8.541-1.096-3.323-1.41-7.278-1.41-12.337 0-5.062.312-8.858 1.253-12.178 1.879-5.695 6.26-8.54 12.047-8.54 5.319 0 8.605 2.053 11.893 5.691.469.794 1.248.794 1.876.318l8.45-7.593c.625-.474.625-1.422.157-1.898-5.162-6.325-12.675-10.28-22.376-10.28-12.988 0-22.843 6.486-26.597 18.188-1.408 4.114-2.036 9.332-2.036 16.292Zm290.388 0c0 6.957.628 12.178 2.035 16.29 3.754 11.86 13.612 18.188 26.598 18.346 9.701 0 17.211-3.952 22.376-10.121.313-.633.468-1.424-.157-1.898l-8.45-7.593c-.626-.474-1.408-.474-1.876.159-3.129 3.638-6.574 5.695-11.893 5.695-5.787 0-10.169-3.008-12.047-8.541-1.096-3.323-1.41-7.278-1.41-12.337 0-5.062.316-8.858 1.41-12.178 1.878-5.695 6.26-8.54 12.047-8.54 5.319 0 8.604 2.053 11.893 5.691.468.794 1.248.794 1.876.318l8.45-7.593c.625-.474.625-1.422.157-1.898-5.008-6.325-12.675-10.28-22.376-10.28-12.986 0-22.844 6.486-26.598 18.188-1.407 4.114-2.035 9.332-2.035 16.292Zm342.5 32.897c-.782 0-1.407-.477-1.407-1.424v-37.96c0-8.54-4.225-14.39-12.205-14.39-7.822 0-12.361 5.85-12.361 14.39v37.96c0 .791-.471 1.424-1.407 1.424h-12.361c-.785 0-1.408-.477-1.408-1.424v-37.96c0-8.54-4.225-14.39-12.206-14.39-7.823 0-12.361 5.85-12.361 14.39v37.96c0 .791-.469 1.424-1.408 1.424H582.18c-.78 0-1.407-.477-1.407-1.424V61.09c0-.79.47-1.422 1.407-1.422h12.361c.785 0 1.408.474 1.408 1.422v4.746h.157c2.817-4.11 8.45-7.592 17.057-7.592 7.665 0 13.768 3.163 17.679 8.7h.157c5.005-5.537 11.422-8.7 20.652-8.7 15.021 0 23.471 10.439 23.471 24.515v41.597c0 .791-.471 1.424-1.41 1.424l-12.047-.159Zm29.51 21.826c0 .947.625 1.424 1.41 1.424l4.225.159c10.794 0 16.115-4.906 21.747-20.563l24.409-68.799c.314-.948-.312-1.424-1.096-1.424h-12.675c-.78 0-1.248.632-1.562 1.424l-13.926 43.021h-.314l-14.55-43.021c-.157-.948-.783-1.424-1.565-1.424H683.98c-.784 0-1.41.632-1.098 1.424l23.628 62.157-1.878 5.535c-2.035 5.377-4.536 7.752-9.701 7.752h-2.346c-.939 0-1.41.63-1.41 1.422v10.913Zm-561.233-42.548c1.096-3.478 1.407-6.645 1.407-12.178 0-5.533-.314-8.54-1.407-12.178-1.878-5.536-6.103-8.54-12.047-8.54-5.947 0-10.326 3.163-12.204 8.54-1.099 3.479-1.41 6.486-1.41 12.178 0 5.533.313 8.7 1.41 12.178 1.878 5.536 6.103 8.544 12.204 8.544 5.944.156 10.169-3.008 12.047-8.544ZM88.947 92.721c0 7.278.785 11.705 2.193 16.29 3.754 11.545 13.611 18.188 26.598 18.188 12.986 0 22.844-6.643 26.441-18.188 1.564-4.744 2.192-9.012 2.192-16.29 0-7.275-.782-11.704-2.192-16.29-3.597-11.545-13.455-18.187-26.441-18.187-13.146 0-23.001 6.642-26.598 18.188-1.565 4.744-2.192 9.014-2.192 16.29Zm317.3-34.477c19.712 0 26.912 6.96 27.226 23.09v42.863c0 .947-.628 1.424-1.41 1.424h-11.265c-.939 0-1.408-.633-1.408-1.424v-4.745h-.157c-2.974 4.43-9.075 7.593-18.15 7.593-11.89 0-21.748-6.33-21.748-20.088 0-14.233 9.858-20.878 25.816-20.878h5.321c.937 0 1.407.635 1.407 1.424v8.7c0 .947-.627 1.421-1.407 1.421h-2.974c-9.701 0-13.923 2.69-13.923 8.859 0 5.535 3.911 8.223 11.105 8.223 9.232 0 14.396-3.638 14.396-11.228V81.494c-.311-7.12-3.911-10.28-14.396-10.28-7.197 0-11.576 2.056-14.708 4.588-.622.47-1.407.312-1.876-.318l-5.007-9.017c-.314-.63-.157-1.263.314-1.737 5.162-3.955 12.204-6.486 22.844-6.486ZM247.826 86.082l.003-.003c-.314 0-.628.159-.628.635v10.278c0 .317.157.635.628.635h33.172c.937 0 1.407-.477 1.407-1.424 0-10.598-.627-15.183-2.192-19.771-3.6-11.228-13.3-18.188-26.6-18.188-12.83 0-22.842 6.645-26.441 18.188-1.405 4.273-2.19 9.488-2.19 16.292 0 6.799.939 11.86 2.347 16.131 3.599 11.545 13.3 18.347 26.911 18.347 11.891 0 20.966-4.588 26.598-11.228.471-.636.471-1.425-.157-1.898l-7.822-7.119c-.625-.474-1.407-.474-2.032.317-3.286 3.638-7.823 6.328-15.179 6.328-7.194 0-12.361-3.482-14.394-9.965l-.005-.016c-.312-.945-.624-1.888-.78-2.833a53.865 53.865 0 0 1-.779-9.488c.157-3.797.314-6.169.782-9.174v-.318c.157-.788.314-1.421.471-2.054 1.719-5.38 6.569-8.54 12.67-8.54 6.103 0 10.799 3.16 12.518 8.54.471 1.58.785 3.32.785 5.533 0 .477-.314.794-.785.794h-18.308Zm287.772 0 .002-.003c-.314 0-.628.159-.628.635v10.278c0 .317.157.635.628.635h33.173c.936 0 1.407-.477 1.407-1.424 0-10.598-.628-15.183-2.192-19.771-3.6-11.228-13.301-18.188-26.601-18.188-12.829 0-22.841 6.645-26.441 18.188-1.407 4.273-2.189 9.488-2.189 16.292 0 6.799.939 11.86 2.346 16.131 3.6 11.545 13.3 18.347 26.912 18.347 11.89 0 20.965-4.588 26.598-11.228.471-.636.471-1.425-.157-1.898l-7.822-7.119c-.625-.474-1.408-.474-2.033.317-3.286 3.638-7.822 6.328-15.179 6.328-7.194 0-12.361-3.482-14.393-9.965l-.006-.017c-.312-.945-.623-1.887-.779-2.832a53.771 53.771 0 0 1-.78-9.488c.157-3.797.314-6.169.782-9.174v-.318c.157-.787.314-1.42.471-2.05v-.004c1.719-5.38 6.569-8.54 12.67-8.54 6.104 0 10.799 3.16 12.518 8.54.471 1.58.785 3.32.785 5.533 0 .477-.314.794-.785.794h-18.307Zm-35.315-54.313c.779 0 1.407.474 1.721 1.266v90.15c0 .948-.625 1.425-1.41 1.425h-12.361c-.936 0-1.405-.633-1.405-1.425v-4.9h-.157c-3.131 4.426-8.45 7.749-17.211 7.749-10.954 0-19.09-5.221-22.376-15.816-1.718-5.062-2.346-9.806-2.346-18.664 0-9.015.782-13.603 2.346-18.665 3.286-10.436 11.265-15.657 22.062-15.815h9.075c.937 0 1.408.632 1.408 1.424V69.41c0 .95-.626 1.424-1.408 1.424h-5.318c-5.792.156-9.86 3.164-11.579 8.54-.939 3.005-1.41 6.328-1.41 12.338 0 6.01.468 9.332 1.41 12.337 1.719 5.533 5.787 8.54 11.89 8.54 6.103 0 10.326-3.007 12.05-8.54.622-2.214 1.093-4.747 1.25-8.541V33.194c0-.948.626-1.425 1.408-1.425h12.361ZM368.871 145.61c0-1.991-.458-2.647-2.616-2.647h-41.858c-2.237 0-2.616.492-2.616 2.647v10.59c0 1.991.458 2.647 2.616 2.647h41.858c2.006 0 2.616-.492 2.616-2.647v-10.59Zm-73.251-2.647H15.697V15.885H295.62v124.429c0 .803-.059 1.346-.1 1.731-.054.508-.079.737.1.917Z"
          fill="transparent"
        />
      </mask>
      <path
        d="M50.195 208.204c-2.148 0-3.784.584-4.905 1.752-1.074 1.168-1.611 2.896-1.611 5.185v4.345H55.03v4.204H43.82v32.653h-4.975V223.69h-6.587v-4.204h6.587v-4.555c0-3.363.958-6.026 2.873-7.988 1.962-1.962 4.718-2.943 8.268-2.943 1.401 0 2.756.21 4.064.631 1.308.373 2.406.934 3.294 1.681l-1.682 3.714c-1.448-1.215-3.27-1.822-5.466-1.822ZM69.124 226.703c1.167-2.476 2.896-4.345 5.185-5.606 2.335-1.261 5.208-1.892 8.618-1.892v4.835l-1.19-.07c-3.878 0-6.914 1.191-9.11 3.574-2.195 2.382-3.293 5.722-3.293 10.02v18.779h-4.975v-36.857h4.765v7.217ZM106.658 256.693c-3.55 0-6.75-.794-9.6-2.382a17.889 17.889 0 0 1-6.726-6.727c-1.635-2.85-2.453-6.073-2.453-9.67 0-3.597.818-6.82 2.453-9.67 1.635-2.849 3.877-5.068 6.727-6.656 2.85-1.589 6.049-2.383 9.599-2.383s6.75.794 9.6 2.383c2.849 1.588 5.068 3.807 6.657 6.656 1.635 2.85 2.452 6.073 2.452 9.67 0 3.597-.817 6.82-2.452 9.67-1.589 2.849-3.808 5.092-6.657 6.727-2.85 1.588-6.05 2.382-9.6 2.382Zm0-4.415c2.616 0 4.952-.583 7.007-1.751 2.102-1.215 3.737-2.92 4.905-5.115 1.168-2.196 1.752-4.695 1.752-7.498s-.584-5.302-1.752-7.497c-1.168-2.196-2.803-3.878-4.905-5.046-2.055-1.214-4.391-1.821-7.007-1.821-2.616 0-4.975.607-7.077 1.821-2.055 1.168-3.69 2.85-4.905 5.046-1.168 2.195-1.752 4.694-1.752 7.497s.584 5.302 1.752 7.498c1.215 2.195 2.85 3.9 4.905 5.115 2.102 1.168 4.461 1.751 7.077 1.751ZM181.49 219.205c4.625 0 8.245 1.332 10.861 3.994 2.663 2.663 3.994 6.587 3.994 11.772v21.372h-4.975v-20.881c0-3.831-.934-6.751-2.803-8.759-1.822-2.009-4.414-3.013-7.778-3.013-3.83 0-6.843 1.191-9.039 3.573-2.195 2.336-3.293 5.583-3.293 9.74v19.34h-4.975v-20.881c0-3.831-.934-6.751-2.803-8.759-1.822-2.009-4.438-3.013-7.848-3.013-3.783 0-6.796 1.191-9.039 3.573-2.195 2.336-3.293 5.583-3.293 9.74v19.34h-4.975v-36.857h4.765v6.726c1.308-2.242 3.13-3.97 5.465-5.185 2.336-1.214 5.022-1.822 8.058-1.822 3.083 0 5.746.654 7.988 1.962 2.289 1.308 3.994 3.247 5.115 5.816 1.355-2.429 3.294-4.321 5.816-5.676 2.57-1.401 5.489-2.102 8.759-2.102ZM238.056 256.693c-2.99 0-5.863-.42-8.619-1.261-2.71-.888-4.835-1.986-6.377-3.294l2.243-3.924c1.541 1.215 3.48 2.219 5.816 3.013a23.74 23.74 0 0 0 7.287 1.122c3.363 0 5.839-.514 7.427-1.542 1.635-1.074 2.453-2.569 2.453-4.484 0-1.355-.444-2.406-1.332-3.154-.887-.794-2.008-1.378-3.363-1.751-1.355-.421-3.153-.818-5.395-1.192-2.99-.56-5.396-1.121-7.218-1.681a11.158 11.158 0 0 1-4.694-3.013c-1.262-1.402-1.892-3.34-1.892-5.816 0-3.083 1.284-5.606 3.854-7.568 2.569-1.962 6.142-2.943 10.72-2.943a26.9 26.9 0 0 1 7.148.981c2.382.608 4.344 1.425 5.886 2.453l-2.173 3.994c-3.036-2.102-6.656-3.153-10.861-3.153-3.176 0-5.582.56-7.217 1.681-1.588 1.121-2.382 2.593-2.382 4.415 0 1.401.444 2.522 1.331 3.363.934.841 2.079 1.472 3.434 1.892 1.354.374 3.223.771 5.605 1.191 2.943.561 5.302 1.121 7.077 1.682a10.39 10.39 0 0 1 4.555 2.873c1.261 1.354 1.892 3.223 1.892 5.605 0 3.224-1.355 5.793-4.064 7.708-2.663 1.869-6.377 2.803-11.141 2.803ZM276.122 237.844l-8.689 7.988v10.511h-4.975V204.35h4.975v35.246l22.002-20.11h6.166l-15.765 15.065 17.237 21.792h-6.096l-14.855-18.499ZM303.994 219.486h4.975v36.857h-4.975v-36.857Zm2.522-8.059c-1.027 0-1.891-.35-2.592-1.051-.701-.7-1.051-1.541-1.051-2.522 0-.934.35-1.752 1.051-2.453.701-.7 1.565-1.051 2.592-1.051 1.028 0 1.892.351 2.593 1.051.701.654 1.051 1.449 1.051 2.383 0 1.028-.35 1.892-1.051 2.592-.701.701-1.565 1.051-2.593 1.051ZM322.812 204.35h4.975v51.993h-4.975V204.35ZM341.629 204.35h4.975v51.993h-4.975V204.35ZM370.327 256.693c-2.99 0-5.863-.42-8.619-1.261-2.709-.888-4.835-1.986-6.376-3.294l2.242-3.924c1.542 1.215 3.48 2.219 5.816 3.013a23.749 23.749 0 0 0 7.287 1.122c3.364 0 5.84-.514 7.428-1.542 1.635-1.074 2.452-2.569 2.452-4.484 0-1.355-.444-2.406-1.331-3.154-.888-.794-2.009-1.378-3.363-1.751-1.355-.421-3.154-.818-5.396-1.192-2.99-.56-5.395-1.121-7.217-1.681a11.155 11.155 0 0 1-4.695-3.013c-1.261-1.402-1.892-3.34-1.892-5.816 0-3.083 1.285-5.606 3.854-7.568 2.569-1.962 6.143-2.943 10.721-2.943 2.382 0 4.765.327 7.147.981 2.382.608 4.344 1.425 5.886 2.453l-2.172 3.994c-3.037-2.102-6.657-3.153-10.861-3.153-3.177 0-5.582.56-7.217 1.681-1.589 1.121-2.383 2.593-2.383 4.415 0 1.401.444 2.522 1.332 3.363.934.841 2.078 1.472 3.433 1.892 1.355.374 3.223.771 5.606 1.191 2.943.561 5.302 1.121 7.077 1.682a10.387 10.387 0 0 1 4.554 2.873c1.262 1.354 1.892 3.223 1.892 5.605 0 3.224-1.354 5.793-4.064 7.708-2.663 1.869-6.376 2.803-11.141 2.803ZM409.795 256.693c-3.551 0-6.75-.794-9.6-2.382a17.894 17.894 0 0 1-6.727-6.727c-1.635-2.85-2.452-6.073-2.452-9.67 0-3.597.817-6.82 2.452-9.67 1.635-2.849 3.878-5.068 6.727-6.656 2.85-1.589 6.049-2.383 9.6-2.383 3.55 0 6.75.794 9.599 2.383a16.892 16.892 0 0 1 6.657 6.656c1.635 2.85 2.452 6.073 2.452 9.67 0 3.597-.817 6.82-2.452 9.67-1.588 2.849-3.807 5.092-6.657 6.727-2.849 1.588-6.049 2.382-9.599 2.382Zm0-4.415c2.616 0 4.951-.583 7.007-1.751 2.102-1.215 3.737-2.92 4.905-5.115 1.167-2.196 1.751-4.695 1.751-7.498s-.584-5.302-1.751-7.497c-1.168-2.196-2.803-3.878-4.905-5.046-2.056-1.214-4.391-1.821-7.007-1.821-2.616 0-4.975.607-7.077 1.821-2.056 1.168-3.691 2.85-4.905 5.046-1.168 2.195-1.752 4.694-1.752 7.497s.584 5.302 1.752 7.498c1.214 2.195 2.849 3.9 4.905 5.115 2.102 1.168 4.461 1.751 7.077 1.751ZM450.853 208.204c-2.149 0-3.784.584-4.905 1.752-1.075 1.168-1.612 2.896-1.612 5.185v4.345h11.352v4.204h-11.212v32.653h-4.975V223.69h-6.586v-4.204h6.586v-4.555c0-3.363.958-6.026 2.873-7.988 1.962-1.962 4.718-2.943 8.268-2.943 1.402 0 2.757.21 4.065.631 1.307.373 2.405.934 3.293 1.681l-1.682 3.714c-1.448-1.215-3.27-1.822-5.465-1.822ZM482.814 254.1c-.934.841-2.102 1.495-3.503 1.962-1.355.421-2.78.631-4.274.631-3.457 0-6.12-.934-7.988-2.803-1.869-1.868-2.803-4.508-2.803-7.918V223.69h-6.587v-4.204h6.587v-8.059h4.975v8.059h11.211v4.204h-11.211v22.002c0 2.195.537 3.877 1.611 5.045 1.122 1.121 2.71 1.682 4.765 1.682a8.842 8.842 0 0 0 2.943-.491c.981-.327 1.822-.794 2.523-1.401l1.751 3.573Z"
        fill="currentColor"
      />
    </StyledSVGWrapper>
  );
};