package com.gestion.empleados;

import java.util.HashMap;
import java.util.Map;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.core.env.Environment;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@Configuration
@EnableTransactionManagement
@EnableJpaRepositories(entityManagerFactoryRef = "userEntityManagerFactory", transactionManagerRef = "userTransactionManager", 
basePackages = { "com.gestion.empleados.repo.user" })
public class MariaDBConfig {

	@Autowired
	private Environment env;
	
	@Bean(name = "userDataSource")
	public DataSource adminDatasource() {
		DriverManagerDataSource dataSource = new DriverManagerDataSource();
		dataSource.setUrl(env.getProperty("mariadb.datasource.url"));
		dataSource.setUsername(env.getProperty("mariadb.datasource.username"));
		dataSource.setPassword(env.getProperty("mariadb.datasource.password"));
		dataSource.setDriverClassName(env.getProperty("mariadb.datasource.driver-class-name"));
		
		return dataSource;
	}
	

	
	@Bean(name = "userEntityManagerFactory")
	public LocalContainerEntityManagerFactoryBean entityManagerFactory() {
		LocalContainerEntityManagerFactoryBean em = new LocalContainerEntityManagerFactoryBean();
		em.setDataSource(adminDatasource());
		em.setPackagesToScan("com.gestion.empleados.model.user");
		
		HibernateJpaVendorAdapter vendorAdapter = new HibernateJpaVendorAdapter();
		em.setJpaVendorAdapter(vendorAdapter);
		
		Map<String, Object> properties = new HashMap<>();
		properties.put("hibernate.hbm2ddl.auto", env.getProperty("mariadb.jpa.hibernate.ddl-auto"));
		properties.put("hibernate.show-sql", env.getProperty("mariadb.jpa.show-sql"));
		properties.put("hibernate.dialect", env.getProperty("mariadb.jpa.database-platform"));
		
		em.setJpaPropertyMap(properties);
		
		return em;
		
	}
	
	@Primary
	@Bean(name = "userTransactionManager")
	public PlatformTransactionManager transactionManager() {
		JpaTransactionManager transactionManager = new JpaTransactionManager();
		transactionManager.setEntityManagerFactory(entityManagerFactory().getObject());
		
		return transactionManager;
	}
}