//read-only configuration set up

package com.emily.eventmanagement.config;

import com.emily.eventmanagement.entity.Event;
import com.emily.eventmanagement.entity.Review;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.http.HttpMethod;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

@Configuration
public class MyDataRestConfig implements RepositoryRestConfigurer {

    private String theAllowedOrigins = "http://localhost:3000";
    //allow us to be able to properly make requests to the front end

    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config,
                                                     CorsRegistry cors) {
        HttpMethod[] theUnsupportedActions = {
                HttpMethod.POST,
                HttpMethod.PATCH,
                HttpMethod.DELETE,
                HttpMethod.PUT};
        //to disable the unsupported actions

        config.exposeIdsFor(Event.class);
        config.exposeIdsFor(Review.class);
        // using the primary key for functionality on the front end so we know exactly what event we're going to be using.

        disableHttpMethods(Event.class, config, theUnsupportedActions);


        /* Configure CORS Mapping */
        cors.addMapping(config.getBasePath() + "/**")
                .allowedOrigins(theAllowedOrigins);
        }

        private void disableHttpMethods(Class theClass,
                RepositoryRestConfiguration config,
                HttpMethod[] theUnsupportedActions) {
            config.getExposureConfiguration()
                    .forDomainType(theClass)
                    .withItemExposure((metdata, httpMethods) ->
                            httpMethods.disable(theUnsupportedActions))
                    .withCollectionExposure((metdata, httpMethods) ->
                            httpMethods.disable(theUnsupportedActions));
        }
    }


